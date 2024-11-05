import React from 'react';

const ChapterTen = () => {
  return (
    <div>
      <h1>Wireshark: Introduction and Basics</h1>

      <section>
        <h2>What is Wireshark?</h2>
        <p>
          Wireshark is a popular open-source packet analyzer used for network troubleshooting, analysis, and software development. It allows users to capture and interactively browse the traffic running on a computer network.
        </p>
      </section>

      <section>
        <h2>How to Install Wireshark</h2>
        <p>
          You can download Wireshark from the official website: 
          <a href="https://www.wireshark.org/download.html" target="_blank" rel="noopener noreferrer">
            Wireshark Downloads
          </a>.
        </p>
        <ol>
          <li>Go to the Wireshark website.</li>
          <li>Choose the version appropriate for your operating system (Windows, macOS, or Linux).</li>
          <li>Follow the installation instructions on the website.</li>
        </ol>
      </section>

      <section>
        <h2>How to Start Capturing Packets</h2>
        <p>
          Once Wireshark is installed, follow these steps to start capturing network packets:
        </p>
        <ol>
          <li>Open Wireshark.</li>
          <li>Select a network interface to capture traffic on (e.g., your Wi-Fi or Ethernet connection).</li>
          <li>Click on the "Start" button to begin capturing packets.</li>
        </ol>
      </section>

      <section>
        <h2>Basic Filters in Wireshark</h2>
        <p>
          Filters are a crucial aspect of Wireshark. They allow you to narrow down the captured traffic to focus on specific protocols, hosts, or other criteria. Here are some basic filters you can use:
        </p>
        <ul>
          <li><code>ip.addr == 192.168.1.1</code>: Filters traffic to/from a specific IP address.</li>
          <li><code>tcp.port == 80</code>: Filters traffic on a specific TCP port (HTTP, for example).</li>
          <li><code>http</code>: Filters for HTTP traffic.</li>
          <li><code>udp</code>: Filters for UDP traffic.</li>
        </ul>
        <p>For more complex filters, you can combine conditions using `and` / `or`:</p>
        <ul>
          <li><code>ip.addr == 192.168.1.1 and tcp.port == 443</code>: Filters traffic to/from a specific IP address and port.</li>
        </ul>
      </section>

      <section>
        <h2>Analyzing Packets</h2>
        <p>
          Wireshark provides detailed information about each captured packet. Here are some key sections you’ll see when you select a packet:
        </p>
        <ul>
          <li><strong>Packet Summary:</strong> A high-level overview of the packet (e.g., source and destination IP addresses, protocols, and ports).</li>
          <li><strong>Packet Details:</strong> A detailed breakdown of the packet, including headers, protocols, and data.</li>
          <li><strong>Packet Bytes:</strong> A raw view of the packet's bytes in hexadecimal and ASCII format.</li>
        </ul>
      </section>

      <section>
        <h2>Visualizing Packet Flow</h2>
        <p>
          Wireshark has built-in tools for visualizing traffic, such as:
        </p>
        <ul>
          <li><strong>IO Graphs:</strong> You can graph packet statistics over time (e.g., packet count per second).</li>
          <li><strong>Flow Graphs:</strong> Display TCP or UDP flows between hosts, making it easier to visualize connections.</li>
        </ul>
        <p>To access these tools, go to <strong>Statistics</strong> in the top menu and select the desired option.</p>
      </section>

      <section>
        <h2>Example Capture File</h2>
        <p>
          To get hands-on experience with Wireshark, you can download a sample packet capture (PCAP) file. Here's an example:
        </p>
        <a href="https://www.wireshark.org/download.html" target="_blank" rel="noopener noreferrer">
          Download Wireshark Sample Capture File
        </a>
        <p>Once you download the PCAP file, open it in Wireshark to explore the packet data.</p>
      </section>
    </div>
  );
};

export default ChapterTen;