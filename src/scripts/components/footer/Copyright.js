"use strict";

const Copyright = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div>
      <p>
        Copyright&nbsp;&copy;&nbsp;2014-{currentYear}<br />
        FitBird&nbsp;ApS<br />
        Esromgade&nbsp;15&nbsp;&nbsp;Floor&nbsp;1&nbsp;&nbsp;Suite&nbsp;1102<br />
        2200&nbsp;Copenhagen&nbsp;N&nbsp;&nbsp;Denmark<br />
        CVR&nbsp;35418067
      </p>
    </div>
  );
};

export default Copyright
