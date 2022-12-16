export default function AccordionBasic(props) {
  return(
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id={props.label}>
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.id}>
          {props.header}
          </button>
        </h2>
        <div id={props.id} class="accordion-collapse collapse show" aria-labelledby={props.label} data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {props.body}
          </div>
      </div>
  </div>
</div>
  );
}
