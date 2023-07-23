const ConceptItem = (props) => {
  return(
    <div>
      <img src='props.imageSource' alt="props.title" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
    </div>
  );
}

export default ConceptItem