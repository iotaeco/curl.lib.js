let k_init = `
void main() {
  init();
  if(my_coord.y == 0) {
    commit(read());
  } else {
    commit(offset());
  }
}
`
let offset = `
ivec4 offset() {
  if(my_coord.x >= HASH_LENGTH / 3 && my_coord.x < HASH_LENGTH / 3 * 2 ) {
    ivec4 my_vec;
    my_vec.rg = get_sum_to_index(HASH_LENGTH / 3, HASH_LENGTH / 3 * 2, my_coord.y, 0);
    return my_vec;
  } else {
    return read_at(ivec2(my_coord.x,0));
  }
}
`
export default offset + k_init