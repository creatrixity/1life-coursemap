'use strict';

type arrowLeftProps = {
  width?: string,
  height?: string
};

const arrowLeft = ({
  width,
  height
}: arrowLeftProps) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white"/>
    </svg>
  )
}

arrowLeft.defaultProps = {
  width: 20,
  height: 20
}

export default arrowLeft;