package com.example.product_test.controller;

import com.example.product_test.dto.ProductDto;
import com.example.product_test.model.Product;
import com.example.product_test.service.ProductService;
import com.example.product_test.utils.APIResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/getAll")
    public List<Product> listProducts(){
        return  productService.getAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<APIResponse> getById(@PathVariable(name = "id") Long id){
        return productService.getById(id);
    }
    @PostMapping("/add")
    public ResponseEntity<?> create(@RequestBody @Valid ProductDto productDto){
        return productService.create(productDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable(name = "id") Long id, @RequestBody @Valid ProductDto productDto){

        return productService.update(id, productDto);
    }
    @PostMapping("/save-product")
    public ResponseEntity<?> saveProduct(@RequestBody ProductDto dto) {

        Product product = productService.save(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") Long id){
        return productService.delete(id);
    }



}
