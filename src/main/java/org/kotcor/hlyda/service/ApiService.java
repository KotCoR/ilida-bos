package org.kotcor.hlyda.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.inject.Inject;

/**
 * Created by KPentaris on 01-Oct-16.
 */
@Service
public class ApiService {

    @Inject
    @Qualifier("data-api")
    RestTemplate apiTemplate;

    String baseUrl = "";



}
