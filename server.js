
        // 데이터를 가져오는 함수
        async function fetchProducts() {
          const response = await fetch('https://openmarket.weniv.co.kr/products/');
          // 가져온 데이터 json으로 변수에 저장
          const data = await response.json();
          // data내의 results부분을 최종적으로 반환
          return data.results;
      }

      // 상품 카드를 data의 갯수만큼 동적으로 만드는 함수
      function createProductCard(product) {

          // html구조생성(카드)
          const productCard = document.createElement('div');
          // html구조에 클래스 추가
          productCard.className = 'product';

          // html구조생성(이미지)
          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.product_name;

          // html구조생성(이름)
          const productName = document.createElement('h2');
          productName.textContent = product.product_name;

          const productPrice = document.createElement('p');
          productPrice.textContent = `Price: ${product.price} KRW`;

          const productInfo = document.createElement('p');
          productInfo.textContent = product.product_info;

          const productStore = document.createElement('p');
          productStore.textContent = `Store: ${product.store_name}`;

          // 최종적으로 카드에 요소들을 appendChild로 추가
          productCard.appendChild(productImage);
          productCard.appendChild(productName);
          productCard.appendChild(productPrice);
          productCard.appendChild(productInfo);
          productCard.appendChild(productStore);

          // 만들어진 카드를 반환
          return productCard;
      }

      // 동적으로 만든 상품카드들을 실제로 html에 있는 컨테이너에 추가하는 함수
      async function displayProducts() {
          // 데이터를 fetchProducts함수로 가져와서 products라는 변수에 저장합니다
          const products = await fetchProducts();
          // 가져온 데이터는 아래처럼 콘솔에 찍어서 확인가능합니다(개발자도구 확인)
          console.log(products);

          const productContainer = document.getElementById('product-container');

          // 데이터의 각 상품마다 반복합니다
          products.forEach(product => {
              // 카드를 만들어서
              const productCard = createProductCard(product);
              // html요소에 추가합니다
              productContainer.appendChild(productCard);
          });
      }

      // 실행이 시작되는 부분(함수는 호출시에 실행됩니다. 위 내용은 모두 실행대기중인 함수이고 자체적으로 실행되지 않습니다.)
      displayProducts();