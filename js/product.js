;(function() {
   var catalog = document.querySelector('.catalog');
   if(catalog === null) {
      return;
   }
   
   var productSizeToPopup = function(productSize) {
      var optionFromSelect = document.getElementsByTagName('option');

      for(var i = 0; i < optionFromSelect.length; i += 1) {
         if (optionFromSelect[i].value === productSize) {
            console.log(optionFromSelect[i].value);
            optionFromSelect[i].selected = true;
         }
      }
      
   }

   var closestItemByClass = function(item, className) {
      var node = item;
      while(node) {
         if(node.classList.contains(className)) {
            return node;
         }
         node = node.parentElement;
      }
      return null;
   }

   var changeProductSize = function(target) {
         var previousBtnActive = document.querySelector('.product__size.is-active');

         if(previousBtnActive) {
               previousBtnActive.classList.remove('is-active');
         }
         
         target.classList.add('is-active');
   }

   var changeProductColor = function(target) {
      var previousBtnActive = document.querySelector('.product__color.is-active');

      if(previousBtnActive) {
         previousBtnActive.classList.remove('is-active');
      }
      target.classList.add('is-active');
   }

   var changeProductOrderInfo = function(target) {
      var product = closestItemByClass(target, 'product');
      var order = document.querySelector('.popup');

      var productTitle = product.querySelector('.product__title').textContent;
      var productColor = document.querySelector('.product__color.is-active').getAttribute('value');
      var productImgSrc = product.querySelector('.product__img').getAttribute('src');
      var productSize = document.querySelector('.product__size.is-active').textContent;

      
      productSizeToPopup(productSize);

      order.querySelector('.order-info-title').setAttribute('value', productTitle);
      order.querySelector('.order-info-color').setAttribute('value', productColor);

      order.querySelector('.order-product-title').textContent = productTitle;
      order.querySelector('.order-product-img').setAttribute('src', productImgSrc);

   }

   catalog.addEventListener('click', function(e) {
      var target = e.target;
      
      if(target.classList.contains('product__size')) {
         e.preventDefault();
         if (target.disabled === false) {
            changeProductSize(target);
         }
      }
      if(target.classList.contains('product__color')){
         e.preventDefault();
         changeProductColor(target);
      }

      if(target.classList.contains('product-btn')) {
         e.preventDefault();
         changeProductOrderInfo(target);
      }
   })

})();