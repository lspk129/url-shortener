import React, { Component } from 'react';


class LinkCreate extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { erro: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('links.insert', this.input.value, (err) => {
      if (err) {
        this.setState({ error: 'Enter valid URL' });
      } else {
        this.setState({ error: '' });
        // clear input field
        this.input.value = '';
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="shorten-link">Link to shorten</label>
          <input ref={(input) => { this.input = input; }} className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-socondary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
