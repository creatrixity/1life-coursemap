import './load-spinner.scss';

type SpinnerProps = {
  width?: string,
  height?: string,
  color?: string
}

const LoadSpinner:React.SFC<SpinnerProps> = ({ width, height, color }) => {
  return (
    <div className="loader" style={{
      width,
      height,
      borderTopColor: color
    }} />
  )
}

LoadSpinner.defaultProps = {
  width: '30px',
  height: '30px',
  color: '#fff'
}

export default LoadSpinner;