import styled from 'styled-components';

export const WrapperForm = styled.div`
  .form {
    .flex-avatar {
      display: flex;
      justify-content: center;

      .avatar-view {
        width: 130px;
        height: 130px;
        border-style: none;
        border-radius: 50%;
        object-fit: cover;
      }
      .upload-file {
        display: none;
      }
    }

    .ant-btn {
      border-radius: 16px;
    }

    .form__label {
      font-size: 14px;
      margin-bottom: 5px;
      color: #607d8b;

      .icon {
        margin-right: 10px;
      }

      .ant-typography {
        color: #607d8b;
      }

      @media (max-width: 896px) {
        font-size: 14px;
      }

      @media (max-width: 768px) {
        font-size: 12px;
      }

      @media (max-width: 414px) {
        font-size: 11px;
      }
    }

    .button-save {
      display: flex;
      justify-content: center;
    }
  }
`;

export const ValidationError = styled.div`
  color: red;
  width: 100%;
  height: 25px;
  margin-bottom: 5px;
`;
