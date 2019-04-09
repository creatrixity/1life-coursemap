'use strict';

type arrowRightProps = {
  width?: string,
  height?: string,
  fill?: string
};

const arrowRight = ({
  width,
  height,
  fill
}: arrowRightProps) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 6.75L9.1275 6.75L4.935 10.9425L6 12L12 6L6 0L4.9425 1.0575L9.1275 5.25L0 5.25V6.75Z" fill={fill}/>
    </svg>
  )
}

arrowRight.defaultProps = {
  width: 12,
  height: 12,
  fill: '#fff'
}

export default arrowRight;