import React, { PropTypes } from 'react'
import MatchProvider from 'react-router/MatchProvider'
import matchPattern from 'react-router/matchPattern'
import { LocationSubscriber } from 'react-router/Broadcasts'

class RegisterMatch extends React.Component {
  static contextTypes = {
    match: PropTypes.object,
    serverRouter: PropTypes.object
  }

  registerMatch() {
    const { match: matchContext } = this.context
    const { match } = this.props

    if (match && matchContext) {
      matchContext.addMatch(match)
    }
  }

  componentWillMount() {
    if (this.context.serverRouter) {
      this.registerMatch()
    }
  }

  componentDidMount() {
    if (!this.context.serverRouter) {
      this.registerMatch()
    }
  }

  componentDidUpdate(prevProps) {
    const { match } = this.context

    if (match) {
      if (prevProps.match && !this.props.match) {
        match.removeMatch(prevProps.match)
      } else if (!prevProps.match && this.props.match) {
        match.addMatch(this.props.match)
      }
    }
  }

  componentWillUnmount() {
    if (this.props.match) {
      this.context.match.removeMatch(this.props.match)
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

function getPatterns(pattern: ?string, patterns: ?Array<string>): Array<string> {
  const result = []
  if (pattern) result.push(pattern)
  if (patterns) result.push(...patterns)
  return result
}

class Match extends React.Component {
  static defaultProps = {
    exactly: false,
    register: true,
  }

  static contextTypes = {
    match: PropTypes.object
  }

  getMatch(location) {
    const patterns = getPatterns(this.props.pattern, this.props.patterns)
    const notPatterns = getPatterns(this.props.notPattern, this.props.notPatterns)
    const exactPatterns = getPatterns(this.props.exactPattern, this.props.exactPatterns)
    const notExactPatterns = getPatterns(this.props.notExactPattern, this.props.notExactPatterns)
    const { match:matchContext } = this.context
    const parent = matchContext && matchContext.parent

    for (let notExactPattern of notExactPatterns) {
      if (matchPattern(notExactPattern, location, true, parent)) return null
    }
    for (let notPattern of notPatterns) {
      if (matchPattern(notPattern, location, false, parent)) return null
    }
    for (let exactPattern of exactPatterns) {
      const match = matchPattern(exactPattern, location, true, parent)
      if (match) return match
    }
    for (let pattern of patterns) {
      const match = matchPattern(pattern, location, false, parent)
      if (match) return match
    }
    if (!patterns.length && !exactPatterns.length) return {params: {}, exact: false, pathname: ""}
  }

  render() {
    return (
      <LocationSubscriber>
        {(location) => {
          const {
            children,
            render,
            component:Component,
            register,
            passProps
          } = this.props

          const match = this.getMatch(location)
          const props = { ...match, location, ...passProps }
          const content = children
            ? children({matched: Boolean(match), ...props})
            : match
              ? render
                ? render(props)
                : <Component {...props} />
              : null

          if (register) {
            return (
              <RegisterMatch match={match}>
                <MatchProvider match={match}>
                  {content}
                </MatchProvider>
              </RegisterMatch>
            )
          }
          return content
        }}
      </LocationSubscriber>
    )
  }
}

export default Match
