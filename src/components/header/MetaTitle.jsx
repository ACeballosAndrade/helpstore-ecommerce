

const MetaTitle = (props) => {

  document.title = 'Help Store -' + props.title;
  return (
    <div className="w-100">{props.children}</div>
  )
}

export default MetaTitle