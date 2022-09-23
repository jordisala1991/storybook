import { styled } from '@stitches/react';

const StyledHeader = styled('header', {
  'fontFamily': 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  'borderBottom': '1px solid rgba(0, 0, 0, 0.1)',
  'padding': '15px 20px',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'space-between',

  '& svg': {
    display: 'inline-block',
    verticalAlign: 'top'
  },

  '& h1': {
    fontWeight: 900,
    fontSize: '20px',
    lineHeight: 1,
    margin: '6px 0 6px 10px',
    display: 'inline-block',
    verticalAlign: 'top'
  },

  '& button + button': {
    marginLeft: '10px'
  },

  '& .welcome': {
    color: '#333',
    fontSize: '14px',
    marginRigth: '10px'
  }
});

export default StyledHeader;
