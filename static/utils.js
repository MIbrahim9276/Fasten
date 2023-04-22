/*
Copyright (c) 2023, Mohamed Ibrahim
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

export function splitTime(time = null) {
  const container = time ? new Date(time) : new Date();
  let text = container.toLocaleTimeString();
  const parts = text.split(":");
  text = parts.slice(0, 2).join(" : ");

  return {
    text: text,
    self: container
  };
}