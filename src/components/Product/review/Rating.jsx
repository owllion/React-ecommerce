import React from "react";
import ReactRating from "react-rating";

import styled, { css } from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ initialRating, readonly, handleRating }) => {
  return (
    <div>
      <ReactRating
        emptySymbol={<OutlineStar />}
        fullSymbol={<FilledStar />}
        initialRating={initialRating}
        fractions={2}
        readonly={readonly}
        onClick={(res) => handleRating(res)}
      />
    </div>
  );
};

const IconStyle = css`
  color: #ffcc1d;
`;
const FilledStar = styled(AiFillStar)`
  ${IconStyle}
`;
const OutlineStar = styled(AiOutlineStar)`
  ${IconStyle}
`;

export default Rating;
