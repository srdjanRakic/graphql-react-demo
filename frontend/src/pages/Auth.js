import React, { Component } from 'react';
import AuthContext from '../context/auth-context';
import styled from "styled-components"
import { Button, Grid, Input, Label } from "@inplayer-org/inplayer-ui";

const { Container, Cell } = Grid;

const Form = styled.form`
  width: 25rem;
  max-width: 80%;
  margin: 5rem auto;
`;

const StyledContainer = styled(Container)`
  margin-top: 2rem;
`

class AuthPage extends Component {
  emailEl = React.createRef();
  passwordEl = React.createRef();

  state = {
    isLogin: true
  };

  static contextType = AuthContext;

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        email: email,
        password: password
      }
    };

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation CreateUser($email: String!, $password: String!) {
            createUser(userInput: {email: $email, password: $password}) {
              _id
              email
            }
          }
        `,
        variables: {
          email: email,
          password: password
        }
      };
    }

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <>
          <Label htmlFor="email">E-Mail</Label>
          <Input type="email" id="email" ref={this.emailEl} />
        </>
        <>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" ref={this.passwordEl} />
        </>
        <StyledContainer columns="1fr 1fr">
          <Cell>
            <Button fullWidth type="submit">
              Submit
            </Button>
          </Cell>
          <Cell>
            <Button
              fullWidth
              type="button"
              onClick={this.switchModeHandler}
            >
              Switch to {this.state.isLogin ? "Signup" : "Login"}
            </Button>
          </Cell>
        </StyledContainer>
      </Form>
    );
  }
}

export default AuthPage;
