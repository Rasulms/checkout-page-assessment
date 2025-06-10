document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="card_radio"]');
  const boxes = document.querySelectorAll(".size_box_parent");
  const product_price_card =
    document.getElementsByClassName("product_price_card");

  radios.forEach((radio, index) => {
    radio.addEventListener("change", function () {
      boxes.forEach((box, boxIndex) => {
        // If this radio matches the index.
        console.log("product_price_card", product_price_card);

        if (index === boxIndex) {
          box.style.display = "block";
          product_price_card[boxIndex].style.border = "2px solid #f77086";
        } else {
          box.style.display = "none";
          product_price_card[boxIndex].style.border = "2px solid #cecece";
        }
      });
    });
  });
});
