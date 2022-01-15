import PropTypes from 'prop-types'

const HookApp = ({ title }) => {

    return <>
        <h1>{ title }</h1>
    </>

}

HookApp.propTypes = {
    title: PropTypes.string.isRequired
}

export {
    HookApp as default
}