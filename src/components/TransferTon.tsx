import { useState } from "react";
import styled from "styled-components";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";

export function TransferTon() {
  const { sender, connected } = useTonConnect();

  const [tonAmount, setTonAmount] = useState("1");
  const [tonRecipient, setTonRecipient] = useState(
    "UQBUEfSGoxUVurpogEsCpMo7hsFnksmAgev0MQQbXkDWfSmR"
  );

  return (
    <Card>
      <FlexBoxCol>
        <h3>Buy Standard Pack</h3>
        <FlexBoxRow>
          <label>Price </label>
          <label
            style={{ marginRight: 8 }}
            type="number"
            value={tonAmount}
            onChange={(e) => setTonAmount(e.target.value)}
          ></label>
        </FlexBoxRow>
        <FlexBoxRow>
          <label>Pay To </label>
          <label
            style={{ marginRight: 8 }}
            value={tonRecipient}
            onChange={(e) => setTonRecipient(e.target.value)}
          ></label>
        </FlexBoxRow>
        <Button
          disabled={!connected}
          style={{ marginTop: 18 }}
          onClick={async () => {
            sender.send({
              to: Address.parse(tonRecipient),
              value: toNano(tonAmount),
            });
          }}
        >
          Confirm
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
