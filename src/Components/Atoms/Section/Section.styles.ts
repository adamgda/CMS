import styled from "styled-components";
import color from "../../../Envs/Colors";

export const SectionContainer = styled.div`
  display: block;
  margin: 1.25rem 0 0;
  padding: 1.25rem 0 0;
  border-top: 1px dashed ${color.main};
  color: ${color.white};

  & > div > div {
    margin: 0 0 2rem;

    &:last-of-type {
      margin: 0;
    }
  }

  table {
    border-spacing: 0;
    width: 100%;
    margin-bottom: 20px;

    td {
      padding: 1rem;

      a {
        margin: 0 0.25em;
      }

      &.auto {
        width: 1px;
        white-space: nowrap;
      }
    }

    thead {
      td {
        background: ${color.main};
        border-right: 1px solid ${color.background};

        &:last-of-type {
          border: 0;
        }
      }
    }

    tbody {
      td {
        border: 1px solid ${color.main};
        border-bottom: 0;
      }

      tr:last-of-type td {
        border-bottom: 1px solid ${color.main};
      }
    }
  }
`;
