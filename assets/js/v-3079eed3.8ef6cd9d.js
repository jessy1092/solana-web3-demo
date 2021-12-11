"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[6488],{344:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3079eed3",path:"/tour/create-token-account.html",title:"Create Token Account",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"tour/create-token-account.md",git:{updatedTime:1636285795e3,contributors:[{name:"yihau",email:"a122092487@gmail.com",commits:1}]}}},9035:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="create-token-account" tabindex="-1"><a class="header-anchor" href="#create-token-account" aria-hidden="true">#</a> Create Token Account</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Keypair<span class="token punctuation">,</span> Transaction<span class="token punctuation">,</span> SystemProgram <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ALICE</span><span class="token punctuation">,</span> <span class="token constant">CONNECTION</span><span class="token punctuation">,</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">,</span> <span class="token constant">TEST_MINT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../helper/const&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> SPLToken <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// create token account</span>\n\n<span class="token comment">// you will need a token account to recieve token in Solana</span>\n<span class="token comment">// in the other words, if you want to receive USDC, you will need a USDC token account</span>\n<span class="token comment">// if you want to receive RAY, you will need a RAY token account</span>\n<span class="token comment">// and these account&#39;s address are different (because they are not the same account)</span>\n\n<span class="token comment">// There are two ways to create token account</span>\n\n<span class="token comment">// 1. Random</span>\n<span class="token comment">// the main concept is to create a random keypair and init it as a token account</span>\n<span class="token comment">// but I don&#39;t recommend you to use this way, it will let user to store many different account</span>\n<span class="token comment">// make managing token account hard.</span>\n\n<span class="token comment">// 2. Associated Token Address (ATA)</span>\n<span class="token comment">// the recommend one</span>\n<span class="token comment">// this way will derive your token address by your SOL address + mint address</span>\n<span class="token comment">// and anytime you get the same result, if you pass the same SOL address and mint address</span>\n<span class="token comment">// it make managing token account easy, because I can know all of your token address just by your SOL address</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 1. Random</span>\n  <span class="token keyword">let</span> randomTokenAccount <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ramdom token address: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>randomTokenAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> randomTokenAccountTx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  randomTokenAccountTx<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    <span class="token comment">// create account</span>\n    SystemProgram<span class="token punctuation">.</span><span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fromPubkey<span class="token operator">:</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      newAccountPubkey<span class="token operator">:</span> randomTokenAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      space<span class="token operator">:</span> SPLToken<span class="token punctuation">.</span>AccountLayout<span class="token punctuation">.</span>span<span class="token punctuation">,</span>\n      lamports<span class="token operator">:</span> <span class="token keyword">await</span> SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">getMinBalanceRentForExemptAccount</span><span class="token punctuation">(</span><span class="token constant">CONNECTION</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      programId<span class="token operator">:</span> SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">// init token account</span>\n    SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">createInitAccountInstruction</span><span class="token punctuation">(</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// program id, always token program id</span>\n      <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token comment">// mint</span>\n      randomTokenAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> <span class="token comment">// token account public key</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey <span class="token comment">// token account authority</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  randomTokenAccountTx<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">random token account txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>randomTokenAccountTx<span class="token punctuation">,</span> <span class="token punctuation">[</span>\n      randomTokenAccount<span class="token punctuation">,</span>\n      <span class="token constant">FEE_PAYER</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 2. ATA</span>\n\n  <span class="token comment">// you always get the same address if you pass the same mint and token account owner</span>\n  <span class="token keyword">let</span> ata <span class="token operator">=</span> <span class="token keyword">await</span> SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">getAssociatedTokenAddress</span><span class="token punctuation">(</span>\n    SPLToken<span class="token punctuation">.</span><span class="token constant">ASSOCIATED_TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// always associated token program id</span>\n    SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// always token program id</span>\n    <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token comment">// mint</span>\n    <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey <span class="token comment">// token account authority</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ata: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ata<span class="token punctuation">.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> ataTx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ataTx<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">createAssociatedTokenAccountInstruction</span><span class="token punctuation">(</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">ASSOCIATED_TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// always associated token program id</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// always token program id</span>\n      <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token comment">// mint (which we used to calculate ata)</span>\n      ata<span class="token punctuation">,</span> <span class="token comment">// the ata we calcualted early</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> <span class="token comment">// token account owner (which we used to calculate ata)</span>\n      <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey <span class="token comment">// payer, fund account, like SystemProgram.createAccount&#39;s from</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ataTx<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ata txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>ataTx<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">FEE_PAYER</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div>',2),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);