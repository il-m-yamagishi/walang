/**
 * WebAssembly module header
 * means "\0asm"
 * @link https://webassembly.github.io/spec/core/binary/modules.html#binary-module
 * @link https://github.com/ColinEberhardt/chasm/commit/26db676f9147b16a0edff38ee20dcd636389f637
 */
const MAGIC_MODULE_HEADER = [0x00, 0x61, 0x73, 0x6d];
const MODULE_VERSION = [0x01, 0x00, 0x00, 0x00];

export const emitter = () => {
  return Uint8Array.from([...MAGIC_MODULE_HEADER, ...MODULE_VERSION]);
};
