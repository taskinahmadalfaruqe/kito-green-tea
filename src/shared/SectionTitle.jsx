
import PropTypes from 'prop-types'
const SectionTitle = ({SectionTitleValue01,SectionTitleValue02,SectionDescription}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-8 my-16'>
      <div className='font-Roboto uppercase font-semibold text-4xl md:text-5xl '>
        <span>{SectionTitleValue01}</span>
        <span className='ml-2 text-Primary_Color'>{SectionTitleValue02}</span>
      </div>
      <div className='text-center max-w-3xl text-sm md:text-base'>{SectionDescription}</div>
    </div>
  )
}

SectionTitle.propTypes = {
    SectionTitleValue01: PropTypes.string.isRequired,
    SectionTitleValue02: PropTypes.string.isRequired,
    SectionDescription: PropTypes.string.isRequired,
}

export default SectionTitle
