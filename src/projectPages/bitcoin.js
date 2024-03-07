import React from "react";
import Dash from "../components/dash";
import "../style/page.css";

const Bitcoin = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Bitcoin Hash &amp; Miner</h1>
        <h2>
          <a
            href="https://github.com/henrybliu/bitcoin-hash-miner"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/bitcoin-hash-miner
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          Blockchain technology relies on a decentralized public ledger for
          recording transactions, ensuring high security through cryptographic
          hashing functions. For instance, Bitcoin employs the SHA256 algorithm
          as its hashing function. Each transaction resides on a block and is
          incorporated into the blockchain only when a hashing function reaches
          a specified security level. To determine this level, random nonce
          values, appended to the initial string before hashing, are introduced
          in the hope of discovering a suitable hash. Miners competitively
          compute these hash functions, striving to add blocks to the
          blockchain.
        </p>
        <p style={{ marginTop: "15px" }}>
          My project replicates this intricate process in SystemVerilog,
          providing efficiency and programming at a hardware-like level.
          Ultimately, this code can be applied to program a piece of hardware,
          particularly in an FPGA environment.
        </p>
        <h3> Project tech stack</h3>
        <p>Languages</p>
        <li>System Verilog</li>
        <p>Tools</p>
        <li>Quartus</li> <li>ModelSim</li>
      </div>
    </div>
  );
};

export default Bitcoin;
