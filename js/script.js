//// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector(".duration-select");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = "1";

//subscription type choice basic, standard, premium
subTypeElement.addEventListener("change", function (e) {
  if (e.key === "basic") {
    subType = e.target.value;
  } else if (e.key === "standard") {
    subType = e.target.value;
  } else {
    subType = e.target.value;
  }
  //console.log(subType);
  updateSubscriptionDiv();
});

//subscription term choice 1, 6, 12
subDurationElement.addEventListener("change", function (e) {
  if (e.key === "12") {
    subDuration = Number(e.target.value);
  } else if (e.key === "6") {
    subDuration = Number(e.target.value);
  } else {
    subDuration = Number(e.target.value);
  }
  // console.log(subDuration, result);
  updateSubscriptionDiv();
});

// Updating subscription details
var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
