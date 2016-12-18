import React, { Component, PropTypes } from 'react'

import { TextField } from 'redux-form-material-ui'
import IconButton from 'material-ui/IconButton'
import Refresh from 'material-ui/svg-icons/navigation/refresh'
import CircularProgress from 'material-ui/CircularProgress'

const ReCaptcha = ({refresh}) => (
  <IconButton
    iconStyle={{
      width: 48,
      height: 48,
      flex: 1
    }}
    style={{
      display: 'flex',
      justifyContent: 'center',
      width: 96,
      height: 96,
      padding: 24
    }}
    onClick={refresh}
  >
    <Refresh />
  </IconButton>
)

ReCaptcha.propTypes = {
  refresh: PropTypes.func.isRequired
}

class CaptchaImage extends Component {
  static propTypes = {
    src: React.PropTypes.string,
    onLoad: React.PropTypes.func,
    validCaptcha: React.PropTypes.bool
  };

  constructor (props) {
    super(props)

    this.state = {loaded: false}
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad () {
    this.setState({loaded: true})
    this.props.onLoad()
  }

  render () {
    return (
      <div>
        <img
          src={this.props.src}
          role="presentation"
          style={{display: this.props.validCaptcha ? 'block' : 'none'}}
          onLoad={this.handleLoad}
        />
        {!this.state.loaded && <CircularProgress />}
      </div>
    )
  }
}

const Captcha = ({ loadedCaptcha, validCaptcha, imageUrl, fullWidth, refresh, input, meta }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 25}}>
        <CaptchaImage
          onLoad={loadedCaptcha}
          validCaptcha={validCaptcha}
          src={imageUrl}
        />
        <ReCaptcha refresh={refresh} />
      </div>
      <TextField
        floatingLabelText="Ingrese aqui el texto de la imagen"
        input={input}
        meta={meta}
      />
    </div>
    )
}

Captcha.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  validCaptcha: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  loadedCaptcha: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default Captcha
