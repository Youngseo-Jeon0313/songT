import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, useLocation } from "react-router-dom";
import Page from "../page";
import "./index.css";

const view1 =
  "https://i.postimg.cc/tTFNgwBH/Kakao-Talk-20210820-122624792.jpg";
const view2 =
  "https://i.postimg.cc/7Yt0qqq2/Kakao-Talk-20210820-122624792-01.jpg";  
const view3 =
  "https://i.postimg.cc/brJr52DF/Kakao-Talk-20210820-122624792-02.jpg";
const view4 =
  "https://i.postimg.cc/8c0cgPLk/Kakao-Talk-20210820-122624792-03.jpg";
const view5 =
  "https://i.postimg.cc/c4v6MwNv/Kakao-Talk-20210820-122624792-04.jpg";

const Transition = () => {
  const Pageview1 = <Page image={view1} />;
  const Pageview2 = <Page image={view2} />;
  const Pageview3 = <Page image={view3} />;
  const Pageview4 = <Page image={view4} />;
  const Pageview5 = <Page image={view5} />;

  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
        <Switch location={location}>
          <Route exact path="/" children={Pageview1} />
          <Route path="/img1" children={Pageview2} />
          <Route path="/img2" children={Pageview3} />
          <Route path="/img3" children={Pageview4} />
          <Route path="/img4" children={Pageview5} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;