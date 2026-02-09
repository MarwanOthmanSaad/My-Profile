const ImgIcon = ({ className }) => {
  return (
    // هنا نلصق كود SVG الذي نسخناه
    // لكن انتبه: يجب تغيير "class" إلى "className"
    // وتغيير "fill-rule" إلى "fillRule" إذا وجدت

    <svg
      className={className}
      viewBox="0 0 464 300"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect
        x="14.8994"
        y="0.136963"
        width="449.906"
        height="319.73"
        rx="10"
        transform="rotate(2.63 14.8994 0.136963)"
        fill="url(#pattern0_3208_786)"
      />
      <defs>
        <pattern
          id="pattern0_3208_786"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
          
            xlinkHref="#image0_3208_786"
            transform="matrix(0.000347222 0 0 0.000488591 0 -0.000317455)"
          />
        </pattern>
      </defs>
    </svg>
  );
};

export default ImgIcon;
