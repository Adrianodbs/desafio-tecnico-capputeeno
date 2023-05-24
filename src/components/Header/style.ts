import { styled } from 'styled-components'

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`

export const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

export const Label = styled.label`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  background: var(--bg-secondary);
  padding: 10px 16px;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
  border: none;
`
