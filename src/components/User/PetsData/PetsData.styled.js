import styled from "@emotion/styled";

export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 47px;
  @media ${p => p.theme.media.desktop} {
    margin-top: 0;
  }
`;

export const TitleAdd = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  @media ${p => p.theme.media.tablet} {
    font-size: 20px;
    line-height: 27px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 20px;
    line-height: 27px;
  }
`;

// export const Container = styled.div`
//   margin-top: 200px;
// `;

export const AddPetButton = styled.button`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 26px;
  color: #fff;
  background-color: #f59256;
  border: 1px solid #f59256;
`;

export const Plus = styled.p`
  color: #fff;
  font-size: 35px;
  text-align: center;
  margin-bottom: 6px;
`;

export const NoAdds = styled.p`
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  padding-top: 55px;
`;
