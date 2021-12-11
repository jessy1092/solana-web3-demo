"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[761],{3430:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-2b9f14c2",path:"/zh/tour/create-token-account.html",title:"Create Token Account",lang:"zh-TW",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/tour/create-token-account.md",git:{updatedTime:1636285795e3,contributors:[{name:"yihau",email:"a122092487@gmail.com",commits:1}]}}},9284:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const p=(0,a(6252).uE)('<h1 id="create-token-account" tabindex="-1"><a class="header-anchor" href="#create-token-account" aria-hidden="true">#</a> Create Token Account</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Keypair<span class="token punctuation">,</span> Transaction<span class="token punctuation">,</span> SystemProgram <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ALICE</span><span class="token punctuation">,</span> <span class="token constant">CONNECTION</span><span class="token punctuation">,</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">,</span> <span class="token constant">TEST_MINT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../helper/const&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> SPLToken <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 創建Token Account</span>\n\n<span class="token comment">// 如果要在Solana上收Token的話，會需要創造且初始化一個相對應的Token Account</span>\n<span class="token comment">// 換句話說，如果你要收USDC，你會需要準備一個收USDC的Account，如果想要收RAY，也是一樣的。</span>\n<span class="token comment">// 而這幾個收Token的Account在Solana裡面都會是不一樣的地址 (是不同的Account)</span>\n\n<span class="token comment">// 創建Token Account的方法有兩種</span>\n\n<span class="token comment">// 1. 隨機產生</span>\n<span class="token comment">// 這種方法的概念就是隨便找一個地址，然後對他做Token Account的初始化</span>\n<span class="token comment">// 目前不建議使用這種方法，這種方法會造成Token Account管理上的麻煩 (因為要記錄許多不同的Account)</span>\n<span class="token comment">// 現在比較推薦能用第二種方式產生Token Account</span>\n\n<span class="token comment">// 2. Associated Token Address (ATA)</span>\n<span class="token comment">// 這種方式會依據你的SOL地址推算出你的Token Account地址</span>\n<span class="token comment">// 所以每次算出來的都會是一樣的，在管理上只需要知道SOL的地址就可以知道他的Token地址</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 1. 隨機產生</span>\n  <span class="token keyword">let</span> randomTokenAccount <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ramdom token address: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>randomTokenAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> randomTokenAccountTx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  randomTokenAccountTx<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    <span class="token comment">// 創建account</span>\n    SystemProgram<span class="token punctuation">.</span><span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fromPubkey<span class="token operator">:</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      newAccountPubkey<span class="token operator">:</span> randomTokenAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      space<span class="token operator">:</span> SPLToken<span class="token punctuation">.</span>AccountLayout<span class="token punctuation">.</span>span<span class="token punctuation">,</span>\n      lamports<span class="token operator">:</span> <span class="token keyword">await</span> SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">getMinBalanceRentForExemptAccount</span><span class="token punctuation">(</span><span class="token constant">CONNECTION</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      programId<span class="token operator">:</span> SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">// token account初始化</span>\n    SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">createInitAccountInstruction</span><span class="token punctuation">(</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// program id, 通常是固定值 (token program id)</span>\n      <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token comment">// mint</span>\n      randomTokenAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> <span class="token comment">// 要初始化的token account public key</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey <span class="token comment">// 操作 token account 的權限 (如果token account需要授權，都需要此帳號簽名)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  randomTokenAccountTx<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">random token account txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>randomTokenAccountTx<span class="token punctuation">,</span> <span class="token punctuation">[</span>\n      randomTokenAccount<span class="token punctuation">,</span>\n      <span class="token constant">FEE_PAYER</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 2. ATA</span>\n\n  <span class="token comment">// 以下是 associated token account的算法</span>\n  <span class="token comment">// 在同一個mint跟token account owner的狀況下，每次都會算出一樣的地址</span>\n  <span class="token keyword">let</span> ata <span class="token operator">=</span> <span class="token keyword">await</span> SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">getAssociatedTokenAddress</span><span class="token punctuation">(</span>\n    SPLToken<span class="token punctuation">.</span><span class="token constant">ASSOCIATED_TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// 通常是固定值, associated token program id</span>\n    SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// 通常是固定值, token program id</span>\n    <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token comment">// mint</span>\n    <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey <span class="token comment">// token account auth (擁有token account權限的人)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ata: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ata<span class="token punctuation">.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> ataTx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ataTx<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    SPLToken<span class="token punctuation">.</span>Token<span class="token punctuation">.</span><span class="token function">createAssociatedTokenAccountInstruction</span><span class="token punctuation">(</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">ASSOCIATED_TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// 通常是固定值, associated token program id</span>\n      SPLToken<span class="token punctuation">.</span><span class="token constant">TOKEN_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token comment">// 通常是固定值, token program id</span>\n      <span class="token constant">TEST_MINT</span><span class="token punctuation">,</span> <span class="token comment">// mint (需要跟剛剛算ata時的mint是同一個)</span>\n      ata<span class="token punctuation">,</span> <span class="token comment">// 剛剛算出來的 ata</span>\n      <span class="token constant">ALICE</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> <span class="token comment">// token account owner (要跟剛剛算ata時的token account auth是同一個)</span>\n      <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey <span class="token comment">// payer, 建立帳戶付錢的人，等同於 SystemProgram.createAccount 的 from</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ataTx<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ata txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>ataTx<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">FEE_PAYER</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br></div></div>',2),t={},o=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);