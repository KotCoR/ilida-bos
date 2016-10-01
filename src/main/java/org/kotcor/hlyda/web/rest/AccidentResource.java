package org.kotcor.hlyda.web.rest;

import org.kotcor.hlyda.service.ApiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

/**
 * Created by KPentaris on 01-Oct-16.
 */
@RestController
@RequestMapping("/api")
public class AccidentResource {

    private final Logger log = LoggerFactory.getLogger(AccidentResource.class);

    @Inject
    ApiService apiService;



}
