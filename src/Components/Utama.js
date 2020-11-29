import React from 'react';
import {Switch, Route} from 'react-router-dom';

import beranda from "../beranda"
import protokol from "../protokol"
import data from "../data"
// import kontak from "../kontak"

const Utama = () => (
    <Switch>
        <Route exact path="/" component={beranda} />
        <Route path="/protokol" component={protokol} />
        <Route path="/data" component={data} />
        {/* <Route path="/kontak" component={kontak} /> */}
    </Switch>
)

export default Utama;