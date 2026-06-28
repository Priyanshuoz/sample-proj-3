import Section1 from "./component/Section 1/Section1";
import Section2 from "./component/Section 2/Section2";

const App = () => {
  const user = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: 'royalblue',
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1546979859-b7d45d499dd6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "lightgreen",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "lightsteelblue",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661757413819-2ca3fb499c0d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:"lightseagreen",
      tag: "Undertaken",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661301073759-763be51674f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:"pink",
      tag: "Undercontrol",
    },
  ];
  return (
    <div>
      <Section1 user={user} />
      <Section2 />
    </div>
  );
};

export default App;
