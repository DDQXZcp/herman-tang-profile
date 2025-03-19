import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: white;
  margin: 20px auto;
  text-align: center;

  h3 {
    font-size: 1.6rem;
    margin-bottom: 8px;
    font-weight: bold;
    color: var(--CsiroBlue);
  }

  p {
    font-size: 1.4rem;
    line-height: 1.4;
  }

  .button {
    display: inline-block;
    margin-top: 12px;
    padding: 10px 20px;
    font-size: 1.4rem;
    background: var(--IeeeBlue);
    color: #ffffff;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--CsiroBlue);
    }
  }
`;

export function PaperCard() {
  return (
    <Card>
      <h3>
        Zhiheng Tang (CSIRO), Chuong Nguyen (CSIRO), Sundaram Muthu (CSIRO)
      </h3>
      <p>
        “Dynamic SLAM using video object segmentation: A low-cost setup for mobile robots,”
        DICTA 2024, Perth, Australia.
      </p>
      <a
        href="https://ieeexplore.ieee.org/document/10869536"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        IEEE Xplore Link
      </a>
    </Card>
  );
}
