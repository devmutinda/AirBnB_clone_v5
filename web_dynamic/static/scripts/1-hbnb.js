$(document).ready(() => {
  let amenities = [];
  $('input').click(() => {
    let new = $('input').attr('data-name')
    if amenities.includes(new) {
      const index = amenities.indexOf(new)
      amenities.splice(index, 1);
    } else {
      amenities.push(new);
    }
    console.log(amenities)
    //$('.amenities h4').text(amenities);
  });
});
