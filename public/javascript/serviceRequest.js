const serviceRequestForm  = document.querySelector('#serviceRequestForm');
serviceRequestForm.addEventListener('submit', serviceRequestFormHandler);

async function serviceRequestFormHandler(event) {
  event.preventDefault();
  const {title, description} = event.target;
  console.log(title.value, description.value);
  const payload = {
    title: title.value,
    description: description.value
  }
  try {
    const response = await httpPost(payload, '/api/serviceRequests');
    console.log(response);
    window.location.reload();
  } catch (error) { console.log(error); }
  
}
