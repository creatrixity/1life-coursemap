'use strict';

import * as React from 'react';
import { debounce } from 'lodash';

import LoadSpinner from '@Components/LoadSpinner'
import { StarIcon } from '@Components/Icons'
import Rating from 'react-rating';

type onSaveJournalInputArgs = {
  value: string,
  type: string,
  question: string,
  tag: number
}

type JournalInputProps= {
  label: string
  name: string,
  tag: number,
  type: string,
  showLabel?: boolean,
  value: string,
  onSaveJournalInput: ({}:onSaveJournalInputArgs, callback: () => any) => any
}

type JournalInputState= {
  value: string,
  isSavingInput: boolean
}

/**
 * Journal Input
 */
export class JournalInput extends React.Component<JournalInputProps, JournalInputState> {
  state:JournalInputState = {
    value: '',
    isSavingInput: false
  }

  static defaultProps = {
    onSaveJournalInput: () => {}
  }

  constructor (props: JournalInputProps) {
    super(props)
    this.handleJournalInputChange = this.handleJournalInputChange.bind(this)
    this.handleJournalRatingChange = this.handleJournalRatingChange.bind(this)
    this._makeRequest = debounce(this._makeRequest, 5000)
  }

  componentDidMount() {
    const { value, type } = this.props;

    let val = value === '' && type === 'rating' ? '0' : value

    this.setState({
      value: val
    })
  }

  renderRating(label:string, value:string):React.ReactNode {
    return (
      <div className={'d-flex'}>
        <section style={{ width: '70%' }} className={'mr-1'}>{label}</section>
        <section style={{ width: '30%' }}>
          <Rating
            initialRating={parseInt(value)}
            emptySymbol={<StarIcon />}
            fullSymbol={<StarIcon fill="yellow" />}
            onChange={this.handleJournalRatingChange}
          />
        </section>
      </div>
    )
  }

  handleJournalRatingChange(rate:number) {
    const value = `${rate}`;

    this.setState({ value })
    this._makeRequest(value)
  }

  handleJournalInputChange(e:React.ChangeEvent<(HTMLTextAreaElement|HTMLInputElement)>):void {
    const { type, value } = e.currentTarget;

    let newValue;

    if (type === 'checkbox') {
      newValue = value === 'on' ? 'off': 'on';
    } else {
      newValue = value;
    }

    this.setState({ value: newValue })
    this._makeRequest(newValue);
  }

  _toggleSavingState() {
    this.setState(({ isSavingInput }) => {
      return {
        isSavingInput: !isSavingInput
      }
    })
  }

  _makeRequest(value:string) {
    if (!value || !value.length) return;
    
    const { onSaveJournalInput, tag, label, type } = this.props;

    this._toggleSavingState()

    onSaveJournalInput({ value, tag, question: label, type }, () => {
      this._toggleSavingState()
    })
  }

  render() {
    const {
      label,
      name,
      type,
      tag,
      showLabel
    } = this.props;
    const { isSavingInput, value } = this.state;

    if (type === 'rating') return this.renderRating(label, value);

    const remainingInputProps = {
      onChange: this.handleJournalInputChange,
      name: name
    };
    const inputTypes:{ [type: string]: any } = {
      'input': <input value={value} {...remainingInputProps} className={'form-control-line w-100'} />,
      'textarea': <textarea value={value} placeholder={'Start writing...'} {...remainingInputProps} className={'form-control d-block w-100'} />,
      'checkbox': <input type="checkbox" id={`journal-checkbox-${tag}`} value={value} checked={value === 'on'} {...remainingInputProps} className={'styled-checkbox'} />,
    }
    
    return (
      <div className={'form-group'}>
        {(showLabel && type !== 'checkbox') &&
        <label className={'label d-flex align-items-center'} style={{ fontSize: '90%' }}>
          <span className={'mr-2'}>{label}</span>
          {isSavingInput && <LoadSpinner width={'16px'} height={'16px'} color={'#77b02a'} />}
        </label>}
        {inputTypes[type]}
        {(showLabel && type === 'checkbox') && <label htmlFor={`journal-checkbox-${tag}`}>{label}</label>}
      </div>
    )
  }
}