import { styled } from 'frontity';

export const LanguageButton = styled.div`
  background-image: url(${({ image }) => image });
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  bottom: -140px;
  height: 20px;
  width: 30px;
  cursor: pointer;

  &:hover {
    &::after {
      position: absolute;
      content: '${({ buttonLabel }) => buttonLabel?.toUpperCase()}';
      font-size: 0.7rem;
      top: -15px;
      left: 50%;
      transform: translate(-50%, 0);
      white-space: nowrap;
    }
  }

`;
LanguageButton.displayName = 'LanguageButton';
