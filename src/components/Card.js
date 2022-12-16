export default function Blog (props) {

  return (
    <div class="card" style={{width: '18rem'}}>
      <img src={props.image} alt='asdsad'></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href="/detail" class="btn btn-primary">Lanjut Baca</a>
      </div>
    </div>
  );
};