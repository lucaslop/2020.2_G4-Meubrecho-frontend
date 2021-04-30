import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Item from '../../components/item/item';

function listaProdutos() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    let token;
    token = localStorage.getItem('authToken');
    if (products.length === 0) {
      console.log('teste', products);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      var myInit = {
        method: 'GET',
        headers: myHeaders
      };
      const request = new Request('http://localhost:3333/product', myInit);
      return fetch(request)
        .then(response => response.json())
        .then(jsonResponse => {
          console.log('api', jsonResponse);
          if (jsonResponse.Error === undefined) setProducts(jsonResponse);
          else setProducts({ error: 'Sem Protutos na loja' });
          return products;
        });
    } else return products;
  };
  getProducts();
  const renderProducts = () => {
    console.log('products', products);
    if (products === null) return <CircularProgress />;
    else if (products.error !== null && products.error !== undefined)
      return <h1 style={{ color: 'red' }}>A loja não tem nenhum produto no momento</h1>;
    else {
      return products.map((product, index) => (
        <div key={index}>
          <Item
            name={product.nome}
            image={product.imagem}
            description={product.descricao}
            price={product.preco}
            tag=''
          />
        </div>
      ));
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
      {renderProducts()}
    </div>
  );
}

export default listaProdutos;
