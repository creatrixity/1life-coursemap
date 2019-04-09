import './load-spinner.scss';

type SpinnerProps = {
  width?: string,
  height?: string,
}

const LoadSpinner:React.SFC<SpinnerProps> = ({ width, height }) => {
  return (
    <div className="loader" style={{
      width,
      height
    }} />
  )
}

LoadSpinner.defaultProps = {
  width: '30px',
  height: '30px',
}

export default LoadSpinner;