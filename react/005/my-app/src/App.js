import './App.css';

// function App() {
//   const productList = {
//     products: [
//       {
//         title: "개발자 무릎 담요",
//         price: 17500,
//         id: 101,
//       },
//       {
//         title: "Hack Your Life 개발자 노트북 파우치",
//         price: 29000,
//         id: 102,
//       },
//       {
//         title: "우당탕탕 라이켓의 실험실 스티커북",
//         price: 29000,
//         id: 103,
//       },
//       {
//         title: "버그를 Java라 버그잡는 개리씨 키링",
//         price: 29000,
//         id: 104,
//       },
//     ],
//   };

//   const arr = productList.products.map((e,i) => {
//     <div>
//       <h1 key={i.id}>{i} {e.title}</h1>
//       <p>{e.price}</p>
//     </div>
//   });
//   return (
//     <>
//       {arr}
//     </>
//   );
// }
import Hello from './components/hello';

function App() {
  return (
    <Hello name="licat"/>
  );
}

export default App;
