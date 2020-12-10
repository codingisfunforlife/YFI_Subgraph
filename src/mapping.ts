import { BigInt } from "@graphprotocol/graph-ts"
import { Yfi, Approval, Transfer } from "../generated/Yfi/Yfi"
import {Trans,Approve } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let approval1 = new Approve(event.transaction.hash.toHex())
  approval1.value = event.params.value
  approval1.owner = event.params.owner
  approval1.spender = event.params.spender
  approval1.timestamp = event.block.timestamp
  approval1.save()
}

export function handleTransfer(event: Transfer): void {
  let transfer1 = new Trans(event.transaction.hash.toHex())
  transfer1.value =  event.params.value
  transfer1.from = event.params.from
  transfer1.to = event.params.to
  transfer1.value = event.transaction.value
  transfer1.timestamp = event.block.timestamp
  transfer1.save()
}
