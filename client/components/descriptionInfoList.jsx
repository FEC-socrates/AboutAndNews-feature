import React from 'react';
import styled from 'styled-components';

const CeoName = styled.div`
  color: #21ce99;
`;


const DescriptionInfoList = (props) => {
console.log(props)
  return (
    <div>
    {props.open === false ?
      <div>
          <div>
            <h3>CEO</h3>
            <CeoName>{props.data.ceo}</CeoName>
          </div>
          <div>
            <h3>Employees</h3>
            <div>{props.data.employees}</div>
          </div>
          <div>
            <h3>Headquarters</h3>
            <div>{props.data.headquarters}</div>
          </div>
          <div>
            <h3>Founded</h3>
            <div>{props.data.founded}</div>
          </div>
          <div>
            <h3>Market Cap</h3>
            <div>{props.data.marketCap}</div>
          </div>
          <div>
            <h3>Price-Earnings Ratio</h3>
            <div>{props.data.priceEarnings}</div>
          </div>
          <div>
            <h3>Dividend Yield</h3>
            <div>{props.data.dividendYield}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
        </div> :
        <div>
          <div>
            <h3>CEO</h3>
            <CeoName>{props.data.ceo}</CeoName>
          </div>
          <div>
            <h3>Employees</h3>
            <div>{props.data.employees}</div>
          </div>
          <div>
            <h3>Headquarters</h3>
            <div>{props.data.headquarters}</div>
          </div>
          <div>
            <h3>Founded</h3>
            <div>{props.data.founded}</div>
          </div>
          <div>
            <h3>Market Cap</h3>
            <div>{props.data.marketCap}</div>
          </div>
          <div>
            <h3>Price-Earnings Ratio</h3>
            <div>{props.data.priceEarnings}</div>
          </div>
          <div>
            <h3>Dividend Yield</h3>
            <div>{props.data.dividendYield}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
          <div>
            <h3>Average Volume</h3>
            <div>{props.data.avgVolume}</div>
          </div>
        </div>
      }
    </div>
  )
}

export default DescriptionInfoList;
