import React from 'react'

export default class Async extends React.Component {
  constructor(){
    super();
    this._isMounted = false;
  }
  componentWillMount = () => {
    this.props.load.then((c) => {
      this.C = c;
      if(this._isMounted)
        this.forceUpdate()
    })
  }
  componentDidMount(){
    this._isMounted = true;
  }
  componentWillUnmount(){
    this._isMounted = false;
  }

  render(){
    const { componentProps } = this.props
    return this.C ? (this.C.default ? <this.C.default {...componentProps} /> : <this.C {...componentProps} />)  : null
  }
}
