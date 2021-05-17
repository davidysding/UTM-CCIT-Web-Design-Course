/*
// The code is from https://www.w3schools.com/howto/howto_js_slideshow.asp
try {
	carousel();
} catch (error) {
  console.error(error);
}
var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}*/
////////////////////////////////////////////
//The code is from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
window.onscroll = function() {stickynavbar()};

var navbar = document.getElementById("site-navigation");
var sticky = navbar.offsetTop;

function stickynavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-nav")
  } else {
    navbar.classList.remove("sticky-nav");
  }
}
////////////////////////////////////////////
var the_payment_option; 


function ec_update_payment_display_customized() {
	var i = arguments[0]; //i is the number of argument and the choice, 0 is direct payment, 1 is credit card payment
	var direct_payment = 0;
	var credit_payment = 1;
	if (i == direct_payment) {
		alert("You just chose the direct payment. Click \"SUBMIT ORDER\" to proceed to payment.");
	} else if (i == credit_payment) {
		alert("You just chose the credit payment. Click \"SUBMIT ORDER\" to proceed to payment.");
		
	}
	the_payment_option == i;
}

function form_payment_form( ) {
	var checkoutButton = document.getElementById('checkout-btn');
var legacyPanel = document.getElementById('ec_submit_order_error');
var successPanel = document.getElementById('success');
	checkoutButton.value = 'Click again to comfirm.';

    if (window.PaymentRequest) {
      // Payment Request is supported in this browser, so we can proceed to use it

      checkoutButton.addEventListener('click', function() {
        var request = new PaymentRequest(buildSupportedPaymentMethodData(),
          buildShoppingCartDetails());

        request.show().then(function(paymentResponse) {
          // Here we would process the payment. For this demo, simulate immediate success:
          paymentResponse.complete('success')
          .then(function() {
              // For demo purposes:
              successPanel.style.display = 'block';
			     legacyPanel.style.display = 'None';

            });

        }).catch(function(error) {
          // Handle cancelled or failed payment. For demo purposes:
          legacyPanel.style.display = 'block';
			successPanel.style.display = 'None';

        });        
      });
    } else {

      // Payment Request is unsupported
      checkoutButton.addEventListener('click', function() {
        // For demo purposes:
        legacyPanel.style.display = 'block';
		  successPanel.style.display = 'None';

      });
    }

}
/******************************************************/
    function buildSupportedPaymentMethodData() {
      // Example supported payment methods:
      return [{
        supportedMethods: 'basic-card',
        data: {
          supportedNetworks: ['visa', 'mastercard'],
          supportedTypes: ['debit', 'credit']
        }
      }];
    }

    function buildShoppingCartDetails() {
      // tips: use 4111 1111 1111 1111 to test 
      return {
        id: 'order-demo',
        displayItems: [
          {
            label: 'Grass Seed',
            amount: {currency: 'CAD', value: '0.99'}
          },
			
          {
            label: 'Shipping',
            amount: {currency: 'CAD', value: '7.99'}
          }
        ],
        total: {
          label: 'Total',
          amount: {currency: 'CAD', value: '8.98'}
        }
      };
    }
  
/*------------------------------------------*/
/*

function form_payment_form() {
	var isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
	
		const supportedPaymentMethods = [
			{
				supportedMethods: ['basic-card'], 
				data: {
					supportedNetworks: ['visa', 'mastercard'],
					supportedTypes: ['debit', 'credit']
				}
			}
		] // payment details 
		const paymentDetails = {
			total: {
				id: 'order-123',
				label: 'Grass Seeds', 
				amount: {
					currency: "CAD",
					value: 0.99
				},
				label: 'Shipping', 
				amount: {
					currency: "CAD",
					value: 7.99
				}
			}
		}
		
		const options = {}
	  }
	*/
