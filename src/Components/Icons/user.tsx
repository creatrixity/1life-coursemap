'use strict';

type props = {
  width?: number,
  height?: number,
  fill?:string
};

const user = ({
  width,
  height,
  fill
}: props) => {
  return (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 16.6667C21.2708 16.6667 25 12.9375 25 8.33333C25 3.72917 21.2708 0 16.6667 0C12.0625 0 8.33333 3.72917 8.33333 8.33333C8.33333 12.9375 12.0625 16.6667 16.6667 16.6667ZM16.6667 20.8333C11.1042 20.8333 0 23.625 0 29.1667V33.3333H33.3333V29.1667C33.3333 23.625 22.2292 20.8333 16.6667 20.8333Z" fill={fill}/>
  </svg>
  )
}

user.defaultProps = {
  width: 34,
  height: 34,
  fill: '#fff'
}

export default user;