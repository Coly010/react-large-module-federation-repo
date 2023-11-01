import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Remote1 = React.lazy(() => import('remote1/Module'));
const Remote2 = React.lazy(() => import('remote2/Module'));
const Remote3 = React.lazy(() => import('remote3/Module'));
const Remote4 = React.lazy(() => import('remote4/Module'));
const Remote5 = React.lazy(() => import('remote5/Module'));
const Remote6 = React.lazy(() => import('remote6/Module'));
const Remote7 = React.lazy(() => import('remote7/Module'));
const Remote8 = React.lazy(() => import('remote8/Module'));
const Remote9 = React.lazy(() => import('remote9/Module'));
const Remote10 = React.lazy(() => import('remote10/Module'));
const Remote11 = React.lazy(() => import('remote11/Module'));
const Remote12 = React.lazy(() => import('remote12/Module'));
const Remote13 = React.lazy(() => import('remote13/Module'));
const Remote14 = React.lazy(() => import('remote14/Module'));
const Remote15 = React.lazy(() => import('remote15/Module'));
const Remote16 = React.lazy(() => import('remote16/Module'));
const Remote17 = React.lazy(() => import('remote17/Module'));
const Remote18 = React.lazy(() => import('remote18/Module'));
const Remote19 = React.lazy(() => import('remote19/Module'));
const Remote20 = React.lazy(() => import('remote20/Module'));
const Remote21 = React.lazy(() => import('remote21/Module'));
const Remote22 = React.lazy(() => import('remote22/Module'));
const Remote23 = React.lazy(() => import('remote23/Module'));
const Remote24 = React.lazy(() => import('remote24/Module'));
const Remote25 = React.lazy(() => import('remote25/Module'));
const Remote26 = React.lazy(() => import('remote26/Module'));
const Remote27 = React.lazy(() => import('remote27/Module'));
const Remote28 = React.lazy(() => import('remote28/Module'));
const Remote29 = React.lazy(() => import('remote29/Module'));
const Remote30 = React.lazy(() => import('remote30/Module'));
const Remote31 = React.lazy(() => import('remote31/Module'));
const Remote32 = React.lazy(() => import('remote32/Module'));
const Remote33 = React.lazy(() => import('remote33/Module'));
const Remote34 = React.lazy(() => import('remote34/Module'));
const Remote35 = React.lazy(() => import('remote35/Module'));
const Remote36 = React.lazy(() => import('remote36/Module'));
const Remote37 = React.lazy(() => import('remote37/Module'));
const Remote38 = React.lazy(() => import('remote38/Module'));
const Remote39 = React.lazy(() => import('remote39/Module'));
const Remote40 = React.lazy(() => import('remote40/Module'));
const Remote41 = React.lazy(() => import('remote41/Module'));
const Remote42 = React.lazy(() => import('remote42/Module'));
const Remote43 = React.lazy(() => import('remote43/Module'));
const Remote44 = React.lazy(() => import('remote44/Module'));
const Remote45 = React.lazy(() => import('remote45/Module'));
const Remote46 = React.lazy(() => import('remote46/Module'));
const Remote47 = React.lazy(() => import('remote47/Module'));
const Remote48 = React.lazy(() => import('remote48/Module'));
const Remote49 = React.lazy(() => import('remote49/Module'));
const Remote50 = React.lazy(() => import('remote50/Module'));
const Remote51 = React.lazy(() => import('remote51/Module'));
const Remote52 = React.lazy(() => import('remote52/Module'));
const Remote53 = React.lazy(() => import('remote53/Module'));
const Remote54 = React.lazy(() => import('remote54/Module'));
const Remote55 = React.lazy(() => import('remote55/Module'));
const Remote56 = React.lazy(() => import('remote56/Module'));
const Remote57 = React.lazy(() => import('remote57/Module'));
const Remote58 = React.lazy(() => import('remote58/Module'));
const Remote59 = React.lazy(() => import('remote59/Module'));
const Remote60 = React.lazy(() => import('remote60/Module'));
const Remote61 = React.lazy(() => import('remote61/Module'));
const Remote62 = React.lazy(() => import('remote62/Module'));
const Remote63 = React.lazy(() => import('remote63/Module'));
const Remote64 = React.lazy(() => import('remote64/Module'));
const Remote65 = React.lazy(() => import('remote65/Module'));
const Remote66 = React.lazy(() => import('remote66/Module'));
const Remote67 = React.lazy(() => import('remote67/Module'));
const Remote68 = React.lazy(() => import('remote68/Module'));
const Remote69 = React.lazy(() => import('remote69/Module'));
const Remote70 = React.lazy(() => import('remote70/Module'));
const Remote71 = React.lazy(() => import('remote71/Module'));
const Remote72 = React.lazy(() => import('remote72/Module'));
const Remote73 = React.lazy(() => import('remote73/Module'));
const Remote74 = React.lazy(() => import('remote74/Module'));
const Remote75 = React.lazy(() => import('remote75/Module'));
const Remote76 = React.lazy(() => import('remote76/Module'));
const Remote77 = React.lazy(() => import('remote77/Module'));
const Remote78 = React.lazy(() => import('remote78/Module'));
const Remote79 = React.lazy(() => import('remote79/Module'));
const Remote80 = React.lazy(() => import('remote80/Module'));
const Remote81 = React.lazy(() => import('remote81/Module'));
const Remote82 = React.lazy(() => import('remote82/Module'));
const Remote83 = React.lazy(() => import('remote83/Module'));
const Remote84 = React.lazy(() => import('remote84/Module'));
const Remote85 = React.lazy(() => import('remote85/Module'));
const Remote86 = React.lazy(() => import('remote86/Module'));
const Remote87 = React.lazy(() => import('remote87/Module'));
const Remote88 = React.lazy(() => import('remote88/Module'));
const Remote89 = React.lazy(() => import('remote89/Module'));
const Remote90 = React.lazy(() => import('remote90/Module'));
const Remote91 = React.lazy(() => import('remote91/Module'));
const Remote92 = React.lazy(() => import('remote92/Module'));
const Remote93 = React.lazy(() => import('remote93/Module'));
const Remote94 = React.lazy(() => import('remote94/Module'));
const Remote95 = React.lazy(() => import('remote95/Module'));
const Remote96 = React.lazy(() => import('remote96/Module'));
const Remote97 = React.lazy(() => import('remote97/Module'));
const Remote98 = React.lazy(() => import('remote98/Module'));
const Remote99 = React.lazy(() => import('remote99/Module'));
const Remote100 = React.lazy(() => import('remote100/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/remote1">Remote1</Link>
          <Link to="/remote2">Remote2</Link>
          <Link to="/remote3">Remote3</Link>
          <Link to="/remote4">Remote4</Link>
          <Link to="/remote5">Remote5</Link>
          <Link to="/remote6">Remote6</Link>
          <Link to="/remote7">Remote7</Link>
          <Link to="/remote8">Remote8</Link>
          <Link to="/remote9">Remote9</Link>
          <Link to="/remote10">Remote10</Link>
          <Link to="/remote11">Remote11</Link>
          <Link to="/remote12">Remote12</Link>
          <Link to="/remote13">Remote13</Link>
          <Link to="/remote14">Remote14</Link>
          <Link to="/remote15">Remote15</Link>
          <Link to="/remote16">Remote16</Link>
          <Link to="/remote17">Remote17</Link>
          <Link to="/remote18">Remote18</Link>
          <Link to="/remote19">Remote19</Link>
          <Link to="/remote20">Remote20</Link>
          <Link to="/remote21">Remote21</Link>
          <Link to="/remote22">Remote22</Link>
          <Link to="/remote23">Remote23</Link>
          <Link to="/remote24">Remote24</Link>
          <Link to="/remote25">Remote25</Link>
          <Link to="/remote26">Remote26</Link>
          <Link to="/remote27">Remote27</Link>
          <Link to="/remote28">Remote28</Link>
          <Link to="/remote29">Remote29</Link>
          <Link to="/remote30">Remote30</Link>
          <Link to="/remote31">Remote31</Link>
          <Link to="/remote32">Remote32</Link>
          <Link to="/remote33">Remote33</Link>
          <Link to="/remote34">Remote34</Link>
          <Link to="/remote35">Remote35</Link>
          <Link to="/remote36">Remote36</Link>
          <Link to="/remote37">Remote37</Link>
          <Link to="/remote38">Remote38</Link>
          <Link to="/remote39">Remote39</Link>
          <Link to="/remote40">Remote40</Link>
          <Link to="/remote41">Remote41</Link>
          <Link to="/remote42">Remote42</Link>
          <Link to="/remote43">Remote43</Link>
          <Link to="/remote44">Remote44</Link>
          <Link to="/remote45">Remote45</Link>
          <Link to="/remote46">Remote46</Link>
          <Link to="/remote47">Remote47</Link>
          <Link to="/remote48">Remote48</Link>
          <Link to="/remote49">Remote49</Link>
          <Link to="/remote50">Remote50</Link>
          <Link to="/remote51">Remote51</Link>
          <Link to="/remote52">Remote52</Link>
          <Link to="/remote53">Remote53</Link>
          <Link to="/remote54">Remote54</Link>
          <Link to="/remote55">Remote55</Link>
          <Link to="/remote56">Remote56</Link>
          <Link to="/remote57">Remote57</Link>
          <Link to="/remote58">Remote58</Link>
          <Link to="/remote59">Remote59</Link>
          <Link to="/remote60">Remote60</Link>
          <Link to="/remote61">Remote61</Link>
          <Link to="/remote62">Remote62</Link>
          <Link to="/remote63">Remote63</Link>
          <Link to="/remote64">Remote64</Link>
          <Link to="/remote65">Remote65</Link>
          <Link to="/remote66">Remote66</Link>
          <Link to="/remote67">Remote67</Link>
          <Link to="/remote68">Remote68</Link>
          <Link to="/remote69">Remote69</Link>
          <Link to="/remote70">Remote70</Link>
          <Link to="/remote71">Remote71</Link>
          <Link to="/remote72">Remote72</Link>
          <Link to="/remote73">Remote73</Link>
          <Link to="/remote74">Remote74</Link>
          <Link to="/remote75">Remote75</Link>
          <Link to="/remote76">Remote76</Link>
          <Link to="/remote77">Remote77</Link>
          <Link to="/remote78">Remote78</Link>
          <Link to="/remote79">Remote79</Link>
          <Link to="/remote80">Remote80</Link>
          <Link to="/remote81">Remote81</Link>
          <Link to="/remote82">Remote82</Link>
          <Link to="/remote83">Remote83</Link>
          <Link to="/remote84">Remote84</Link>
          <Link to="/remote85">Remote85</Link>
          <Link to="/remote86">Remote86</Link>
          <Link to="/remote87">Remote87</Link>
          <Link to="/remote88">Remote88</Link>
          <Link to="/remote89">Remote89</Link>
          <Link to="/remote90">Remote90</Link>
          <Link to="/remote91">Remote91</Link>
          <Link to="/remote92">Remote92</Link>
          <Link to="/remote93">Remote93</Link>
          <Link to="/remote94">Remote94</Link>
          <Link to="/remote95">Remote95</Link>
          <Link to="/remote96">Remote96</Link>
          <Link to="/remote97">Remote97</Link>
          <Link to="/remote98">Remote98</Link>
          <Link to="/remote99">Remote99</Link>
          <Link to="/remote100">Remote100</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/remote1" element={<Remote1 />} />
        <Route path="/remote2" element={<Remote2 />} />
        <Route path="/remote3" element={<Remote3 />} />
        <Route path="/remote4" element={<Remote4 />} />
        <Route path="/remote5" element={<Remote5 />} />
        <Route path="/remote6" element={<Remote6 />} />
        <Route path="/remote7" element={<Remote7 />} />
        <Route path="/remote8" element={<Remote8 />} />
        <Route path="/remote9" element={<Remote9 />} />
        <Route path="/remote10" element={<Remote10 />} />
        <Route path="/remote11" element={<Remote11 />} />
        <Route path="/remote12" element={<Remote12 />} />
        <Route path="/remote13" element={<Remote13 />} />
        <Route path="/remote14" element={<Remote14 />} />
        <Route path="/remote15" element={<Remote15 />} />
        <Route path="/remote16" element={<Remote16 />} />
        <Route path="/remote17" element={<Remote17 />} />
        <Route path="/remote18" element={<Remote18 />} />
        <Route path="/remote19" element={<Remote19 />} />
        <Route path="/remote20" element={<Remote20 />} />
        <Route path="/remote21" element={<Remote21 />} />
        <Route path="/remote22" element={<Remote22 />} />
        <Route path="/remote23" element={<Remote23 />} />
        <Route path="/remote24" element={<Remote24 />} />
        <Route path="/remote25" element={<Remote25 />} />
        <Route path="/remote26" element={<Remote26 />} />
        <Route path="/remote27" element={<Remote27 />} />
        <Route path="/remote28" element={<Remote28 />} />
        <Route path="/remote29" element={<Remote29 />} />
        <Route path="/remote30" element={<Remote30 />} />
        <Route path="/remote31" element={<Remote31 />} />
        <Route path="/remote32" element={<Remote32 />} />
        <Route path="/remote33" element={<Remote33 />} />
        <Route path="/remote34" element={<Remote34 />} />
        <Route path="/remote35" element={<Remote35 />} />
        <Route path="/remote36" element={<Remote36 />} />
        <Route path="/remote37" element={<Remote37 />} />
        <Route path="/remote38" element={<Remote38 />} />
        <Route path="/remote39" element={<Remote39 />} />
        <Route path="/remote40" element={<Remote40 />} />
        <Route path="/remote41" element={<Remote41 />} />
        <Route path="/remote42" element={<Remote42 />} />
        <Route path="/remote43" element={<Remote43 />} />
        <Route path="/remote44" element={<Remote44 />} />
        <Route path="/remote45" element={<Remote45 />} />
        <Route path="/remote46" element={<Remote46 />} />
        <Route path="/remote47" element={<Remote47 />} />
        <Route path="/remote48" element={<Remote48 />} />
        <Route path="/remote49" element={<Remote49 />} />
        <Route path="/remote50" element={<Remote50 />} />
        <Route path="/remote51" element={<Remote51 />} />
        <Route path="/remote52" element={<Remote52 />} />
        <Route path="/remote53" element={<Remote53 />} />
        <Route path="/remote54" element={<Remote54 />} />
        <Route path="/remote55" element={<Remote55 />} />
        <Route path="/remote56" element={<Remote56 />} />
        <Route path="/remote57" element={<Remote57 />} />
        <Route path="/remote58" element={<Remote58 />} />
        <Route path="/remote59" element={<Remote59 />} />
        <Route path="/remote60" element={<Remote60 />} />
        <Route path="/remote61" element={<Remote61 />} />
        <Route path="/remote62" element={<Remote62 />} />
        <Route path="/remote63" element={<Remote63 />} />
        <Route path="/remote64" element={<Remote64 />} />
        <Route path="/remote65" element={<Remote65 />} />
        <Route path="/remote66" element={<Remote66 />} />
        <Route path="/remote67" element={<Remote67 />} />
        <Route path="/remote68" element={<Remote68 />} />
        <Route path="/remote69" element={<Remote69 />} />
        <Route path="/remote70" element={<Remote70 />} />
        <Route path="/remote71" element={<Remote71 />} />
        <Route path="/remote72" element={<Remote72 />} />
        <Route path="/remote73" element={<Remote73 />} />
        <Route path="/remote74" element={<Remote74 />} />
        <Route path="/remote75" element={<Remote75 />} />
        <Route path="/remote76" element={<Remote76 />} />
        <Route path="/remote77" element={<Remote77 />} />
        <Route path="/remote78" element={<Remote78 />} />
        <Route path="/remote79" element={<Remote79 />} />
        <Route path="/remote80" element={<Remote80 />} />
        <Route path="/remote81" element={<Remote81 />} />
        <Route path="/remote82" element={<Remote82 />} />
        <Route path="/remote83" element={<Remote83 />} />
        <Route path="/remote84" element={<Remote84 />} />
        <Route path="/remote85" element={<Remote85 />} />
        <Route path="/remote86" element={<Remote86 />} />
        <Route path="/remote87" element={<Remote87 />} />
        <Route path="/remote88" element={<Remote88 />} />
        <Route path="/remote89" element={<Remote89 />} />
        <Route path="/remote90" element={<Remote90 />} />
        <Route path="/remote91" element={<Remote91 />} />
        <Route path="/remote92" element={<Remote92 />} />
        <Route path="/remote93" element={<Remote93 />} />
        <Route path="/remote94" element={<Remote94 />} />
        <Route path="/remote95" element={<Remote95 />} />
        <Route path="/remote96" element={<Remote96 />} />
        <Route path="/remote97" element={<Remote97 />} />
        <Route path="/remote98" element={<Remote98 />} />
        <Route path="/remote99" element={<Remote99 />} />
        <Route path="/remote100" element={<Remote100 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
