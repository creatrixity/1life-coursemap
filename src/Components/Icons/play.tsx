'use strict';

type props = {
  width?: number,
  height?: number,
  fill?:string
};

const play = ({
  width,
  height,
  fill
}: props) => {
  return (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18.125L17.5 12.5L10 6.875V18.125ZM12.5 0C5.6 0 0 5.6 0 12.5C0 19.4 5.6 25 12.5 25C19.4 25 25 19.4 25 12.5C25 5.6 19.4 0 12.5 0ZM12.5 22.5C6.9875 22.5 2.5 18.0125 2.5 12.5C2.5 6.9875 6.9875 2.5 12.5 2.5C18.0125 2.5 22.5 6.9875 22.5 12.5C22.5 18.0125 18.0125 22.5 12.5 22.5Z" fill={fill}/>
  </svg>
  )
}

play.defaultProps = {
  width: 25,
  height: 25,
  fill: '#fff'
}

export default play;

