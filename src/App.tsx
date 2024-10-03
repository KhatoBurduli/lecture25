// import Concurrency from "./component/Concurrency";

import { lazy, Suspense } from "react";
import Form from "./component/Form";

const Concurrency = lazy(() => import('./component/Concurrency'))

const App = () => {
  return (
    <div>
      {/* <Suspense fallback={<h1>loading</h1>}>
      <Concurrency/>
      </Suspense> */}

      <Form/>
      <Form/>
      <Form/>

    </div>
  );
}

export default App;
